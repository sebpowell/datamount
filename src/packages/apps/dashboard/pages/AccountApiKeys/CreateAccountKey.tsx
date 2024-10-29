import { Button } from "@/packages/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/packages/components/ui/Dialog";
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
import { Queries, client, queryClient } from "@/packages/server/clients/api";
import {
  CreateApiKeySchema,
  ICreateApiKeySchema,
} from "@/packages/server/modules/account/account-api-keys/api-keys.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogProps } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

const CreateAccountKey = (
  props: Required<Pick<DialogProps, "open" | "onOpenChange">>,
) => {
  const form = useForm<ICreateApiKeySchema>({
    resolver: zodResolver(CreateApiKeySchema),
    defaultValues: {
      name: "",
    },
  });

  const { mutate, isLoading: isCreating } =
    client.account.keys.create.useMutation({
      onSuccess: () => {
        form.reset();
        props.onOpenChange(false);
        queryClient.invalidateQueries([Queries.api_keys]);
      },
      onError: () => {},
    });

  const onSubmit = async (values: ICreateApiKeySchema) => {
    mutate({ body: values });
  };

  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create API key</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormStack>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        size="lg"
                        placeholder="Your API key name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" isLoading={isCreating}>
                Create
              </Button>
            </FormStack>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export { CreateAccountKey };
