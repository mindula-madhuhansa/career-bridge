import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware({
  middlewareAuth: {
    enabled: true,
    unauthenticatedPaths: ["/", "/jobs/:orgId*", "/job/:jobId*"],
  },
});

export const config = {
  matcher: ["/", "/new-listing/:path*", "/jobs/:path*", "/job/:path*"],
};
