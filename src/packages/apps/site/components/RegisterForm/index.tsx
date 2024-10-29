"use client";
import { Box } from "@/packages/components/ui/Box";
import { Button } from "@/packages/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormStack,
} from "@/packages/components/ui/Form";
import { Input } from "@/packages/components/ui/Input";
import { Link } from "@/packages/components/ui/Link";
import { Paragraph } from "@/packages/components/ui/Paragraph";
import { client } from "@/packages/server/clients/api";
import { RegisterUserSchema } from "@/packages/server/modules/auth/schemas/register-user.schema";
import { routes } from "@/packages/utils/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const RegisterForm = () => {
  const router = useRouter();

  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof RegisterUserSchema>>({
    resolver: zodResolver(RegisterUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isLoading } = client.auth.register.useMutation({
    onSuccess: () => {
      signIn("credentials", {
        redirect: false,
        email: form.getValues().email,
        password: form.getValues().password,
      }).then((resp) => {
        if (resp?.error || !resp?.ok) {
          // toast({ variant: "destructive", title: "Error" });
        } else {
          router.push(routes.getRoute("account_dashboard"));
        }
      });
    },
    onError: ({ body, status }) => {
      // setError(status === 400 ? body.messsage : "Something went wrong");
    },
  });

  const onSubmit = async (values: z.infer<typeof RegisterUserSchema>) => {
    mutate({ body: values });
  };

  return (
    <Box className="w-full max-w-sm">
      {error && error}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormStack>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              isBlock
              size="lg"
              variant="solid"
              isLoading={isLoading}
            >
              Sign up for free
            </Button>
            <Paragraph className="text-center">
              Already have an account?{" "}
              <Link asChild variant="solid">
                <NextLink href={routes.getRoute("auth_login")}>
                  Sign in
                </NextLink>
              </Link>
              .
            </Paragraph>
          </FormStack>
        </form>
      </Form>
    </Box>
  );
};
