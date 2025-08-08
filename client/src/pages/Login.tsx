import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import e from "../assets/logo1.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { FormEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    setError("");
    setLoading(true);
    setSuccess("");
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="space-y-6 w-96">
        <CardHeader className="flex justify-center">
          <img
            src={e}
            alt="photo"
            className=" rounded-full object-cover w-24 h-24"
          />
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2 relative">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type={show ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShow((prev) => !prev)}
                    className="absolute right-3 top-[55%] text-gray-600 hover:text-black"
                  >
                    {show ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex-col flex gap-2">
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "chargement...." : "Sign In"}
                </Button>
                {error && <div className="mt-3 text-red-500">{error}</div>}
                {success && (
                  <div className="mt-3 text-green-500">{success}</div>
                )}
                <div className="flex items-center justify-center gap-2">
                  <div className="h-px w-full bg-gray-300" />
                  <span className="text-gray-500 text-sm whitespace-nowrap">
                    or
                  </span>
                  <div className="h-px w-full bg-gray-300" />
                </div>

                <Button variant="outline" className="w-full">
                  <Link to="/register">Sign Up</Link>
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
