import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware({
  middlewareAuth: {
    enabled: true,
    unauthenticatedPaths: ["/", "/jobs/:orgId*"],
  },
});

export const config = {
  matcher: ["/", "/new-listing/:path*", "/dashboard", "/jobs/:path*"],
};
