"use client"
import React from "react";
import Link from "next/link";

const AccessDenied = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>🚫 Access Denied</h1>
            <p>You do not have permission to view this page.</p>
            <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
                Go back to Home
            </Link>
        </div>
    );
};

export default AccessDenied;