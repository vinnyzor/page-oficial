import { db } from "@/lib/prisma";

import { redirect } from "next/navigation";

const AuthCallbackPage = async () => {

    redirect("/app");
};

export default AuthCallbackPage
