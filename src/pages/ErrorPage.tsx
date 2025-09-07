import NavBar from "@/components/NavBar";
import { EmptyState } from "@chakra-ui/react";
import { GiTerror } from "react-icons/gi";
import { isRouteErrorResponse, useRouteError } from "react-router";
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <EmptyState.Root size={"lg"}>
        <EmptyState.Content>
          <EmptyState.Indicator>
            <GiTerror />
          </EmptyState.Indicator>
          <EmptyState.Title>Oops! Something went wrong.</EmptyState.Title>
          <EmptyState.Description>
            {isRouteErrorResponse(error)
              ? `Error ${error.status}: ${error.statusText}`
              : "An unexpected error occurred."}
          </EmptyState.Description>
        </EmptyState.Content>
      </EmptyState.Root>
    </>
  );
};

export default ErrorPage;
