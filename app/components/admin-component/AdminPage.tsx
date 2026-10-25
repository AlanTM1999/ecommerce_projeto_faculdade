import type { ReactNode } from "react";

interface AdminPageProps {
    page:string;
    description?:string;
    children?:ReactNode;
}

function AdminPage({ page, description, children }: AdminPageProps) {
    return (
        <div className="space-y-7">
            <div>
                <h1 className="uppercase tracking-[.08em] mb-1 text-[22px] font-bold">{page}</h1>
                {description && (
                    <p className="text-vertice-100">
                        {description}
                    </p>
                )}
            </div>
            <section>
                {children}
            </section>
        </div>
    );
}

export default AdminPage;


