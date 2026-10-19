import { Form } from "react-router";
import type { Route } from "./+types/admin.auth";

export function meta({}:Route.MetaArgs){
    return [
        { title: "Admin Auth" }
    ]
}

export default function admin_auth() {
    return (
        <div>
            <Form method="post">

            </Form>
        </div>
    );
}