import { isRouteError, notFound, RouteError } from "@lib/route/error";
import { errAsync, okAsync, ResultAsync } from "neverthrow";

export const getSafeResultAsync = <T>(
  unsafe: Promise<T | RouteError>,
  error: (e) => RouteError
): ResultAsync<T, RouteError> => {
  const unsafeResultAsync = ResultAsync.fromPromise(unsafe, error);

  return unsafeResultAsync.andThen((unsafeResult) => {
    if (isRouteError(unsafeResult)) return errAsync(notFound());

    return okAsync(unsafeResult);
  });
};
