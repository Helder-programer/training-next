import { useAuth } from "@/contexts/auth";
import { FormEvent, useState } from "react";
import styled from 'styled-components';

interface IProps {
    className?: string;
}


function LoginForm({ className }: IProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const auth = useAuth();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            await auth.signIn({ email, password });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={className}>
            <div className="mt-3" id="email-div">
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="input-form"
                    placeholder="."
                    required
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <label htmlFor="email">E-mail</label>
            </div>

            <div className="mt-3 mb-2" id="password-div">
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="."
                    className="input-form"
                    required
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <label htmlFor="password">Password</label>
            </div>


            <div className="row mt-3 me-0 ms-0 justify-content-between">
                <div className="col-md-auto p-0">
                    <button type="submit" className="btn btn-outline-custom-blue">Sign in</button>
                </div>
                <div className="col-md-auto p-0">
                    <button type="submit" className="btn btn-outline-custom-orange">Register</button>
                </div>
            </div>
        </form>
    );
}

const StyledLoginForm = styled(LoginForm)`
    width: auto;


    #email-div, #password-div {
        position: relative;

        label {
            position: absolute;
            z-index: 1;
            top: 17px;
            left: 2px;
            cursor: text;
            transition: all 0.3s ease-in-out;
            opacity: 0.8;
        }
    }


    .input-form {
        display: block;
        width: 100%;
        border: none;
        border-bottom: 2px solid #334;
        outline: none;
        z-index: 15;
        background-color: transparent;
        padding-top: 17px;
    }

    .input-form::placeholder {
        opacity: 0;
    }

    .input-form:not(:placeholder-shown)~label, .input-form:focus~label {
        top: 0px !important;
        font-size: 12px;
        color: #00a2ff;
    }

    .input-form:not(:placeholder-shown), .input-form:focus {
        border-bottom: 2px solid #00a2ff;
    }
`;

export default StyledLoginForm;