import React from "react";
import AdminLayout from "../../components/adminLayout";
import HomeAdmin from "./homeadmin/homeAdmin";


export default function AdminPage(){
    return(
        <>
        <AdminLayout>
            <HomeAdmin/>
        </AdminLayout>

        </>
    )
}