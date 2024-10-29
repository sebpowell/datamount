"use client";
import { Alert } from "@/packages/components/ui/Alert";
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
import { ErrorCodes } from "@/packages/server/exceptions/exception-codes.enum";
import { routes } from "@/packages/utils/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email."),
  password: z.string(),
});

export const LoginForm = () => {
  const [isLoading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);

    const resp = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (resp?.error || !resp?.ok) {
      setError(resp?.error ? resp.error : ErrorCodes.unhandled);
    } else {
      router.push(routes.getRoute("account_dashboard"));
    }

    setLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormStack>
          {error && <Alert>{error}</Alert>}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input size="lg" {...field} placeholder="Email" />
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
                <FormLabel className="flex">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    size="lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            isBlock
            isLoading={isLoading}
            variant="solid"
            size="lg"
          >
            Login
          </Button>
          <Box>
            No account?{" "}
            <Link asChild variant="solid">
              <NextLink href={routes.getRoute("auth_register")}>
                Sign up
              </NextLink>
            </Link>
            .
          </Box>
        </FormStack>
      </form>
    </Form>
  );
};
