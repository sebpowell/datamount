import { Button } from "@/packages/components/ui/Button";
import { Container } from "@/packages/components/ui/Container";
import { Heading } from "@/packages/components/ui/Heading";
import { Stack } from "@/packages/components/ui/Stack";

const ErrorPage = () => {
  return (
    <Container className="flex h-screen w-screen items-center justify-center text-center">
      <Stack spaceY={6}>
        <Heading as="h1" size="h2">
          Something went wrong
        </Heading>
        <Button size="lg">Try again</Button>
      </Stack>
    </Container>
  );
};

export { ErrorPage };
