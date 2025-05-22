import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function KakaoCallback() {
    const navigate = useNavigate();

    useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");

    if (code) {
        axios
        .get(`http://localhost:8080/api/v1/oauth2/kakao?code=${code}`)
        .then((res) => {
            const { token, loginId } = res.data;
            localStorage.setItem("accessToken", token);
            localStorage.setItem("loginId", loginId);
            navigate(`/users/${loginId}/dashboard`);
        })
        .catch((err) => {
            console.error("로그인 실패", err);
            navigate("/authentication/sign-in");
        });
    }
    }, [navigate]);

    return <div>로그인 중입니다...</div>;
}

export default KakaoCallback;
