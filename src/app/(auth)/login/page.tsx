"use client";

import { Suspense, useState } from "react";
import { Lock01, Mail01 } from "@untitledui/icons";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { createClient } from "@/utils/supabase/client";

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const supabase = createClient();
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            router.push("/dashboard");
            router.refresh();
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-primary p-4">
            <div className="w-full max-w-md space-y-8 rounded-2xl border border-secondary bg-primary p-8 shadow-sm">
                {/* Header */}
                <div className="space-y-2 text-center">
                    <h1 className="text-display-xs font-semibold text-primary">Welcome back</h1>
                    <p className="text-md text-tertiary">Sign in to your account to continue</p>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-5">
                    <Input
                        label="Email"
                        type="email"
                        value={email}
                        onChange={setEmail}
                        placeholder="Enter your email"
                        icon={Mail01}
                        isRequired
                        isInvalid={!!error}
                        hint={error || undefined}
                    />

                    <Input
                        label="Password"
                        type="password"
                        value={password}
                        onChange={setPassword}
                        placeholder="Enter your password"
                        icon={Lock01}
                        isRequired
                        isInvalid={!!error}
                    />

                    <Button type="submit" color="primary" size="lg" isLoading={loading} className="w-full">
                        {loading ? "Signing in..." : "Sign In"}
                    </Button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-tertiary">
                    Don't have an account?{" "}
                    <a href="#" className="font-medium text-brand-600 hover:text-brand-700">
                        Contact support
                    </a>
                </p>
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense
            fallback={
                <div className="flex min-h-screen items-center justify-center bg-primary p-4">
                    <div className="w-full max-w-md rounded-2xl border border-secondary bg-primary p-8 shadow-sm">
                        <div className="space-y-2 text-center">
                            <div className="mx-auto h-8 w-48 animate-pulse rounded bg-secondary" />
                            <div className="mx-auto h-4 w-64 animate-pulse rounded bg-secondary" />
                        </div>
                    </div>
                </div>
            }
        >
            <LoginForm />
        </Suspense>
    );
}
