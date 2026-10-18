import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/client.layout.tsx", [
        index("routes/home.tsx"),
        route("/search", "routes/search.tsx"),
        route("/orders", "routes/orders.tsx"),
        route("/cart", "routes/cart.tsx"),
        route("/checkout", "routes/checkout.tsx"),
        route("/confirm", "routes/confirm.tsx"),
    ]),

    layout("layouts/auth.layout.tsx", [
        route("/admin/auth", "routes/admin/admin.auth.tsx"),
        route("/auth", "routes/auth.tsx")
    ]),

    route("/admin", "layouts/admin.layout.tsx", [
        index("routes/admin/admin.tsx"),
        route("products", "routes/admin/admin.products.tsx"),
        route("categories", "routes/admin/admin.categories.tsx"),
        route("orders", "routes/admin/admin.orders.tsx"),
        route("clients", "routes/admin/admin.clients.tsx")
    ])
] satisfies RouteConfig;
