import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }
    return (
        <div>

            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-circle text-rose-600 bg-white">
                    <FaGoogle />
                </button>
            </div>

        </div>

    );
};

export default SocialLogin;