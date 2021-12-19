import { db, doc, getDoc } from '../../Config/Firebase'
import { useState } from 'react'
import { useHistory } from 'react-router';
import './Style/index.css'
function Login() {
    const auth = sessionStorage.getItem("auth");
    console.log(auth)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory()
    const login = async () => {
        // sessionStorage.setItem("auth", true);

        setLoading(true)
        const docRef = doc(db, "web-admin", "id-password");
        const docSnap = await getDoc(docRef);
        const loginDetail = docSnap.data()

        if (loginDetail.userName === email && loginDetail.password === password) {
            console.log('tr')
            sessionStorage.setItem("auth", true);
            setLoading(false)

            history.push('/dashboard')
        }
        else {
            setLoading(false)
            alert('detail incorrect')
            // history.push('/dashboard')
        }
    }

    return (
        <div className='Main'>
            <div className='header'>
                <h1 style={{ color: "white" }}>LOGIN AS ADMINISTER</h1>
            </div>
            <div className='body_container'>
                <div className='login_container'>
                  <label>User Name:</label>
                  <br/>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type='text' required />
                
                    <br />
                    <label>Password:</label>
                    <br/>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' required />
                    <br />
                    <button onClick={login}>{loading ? 'loading...' : 'login'} </button>
                </div>
            </div>
        </div>
    )

}

export default Login;