import { useState } from 'react'
import axios from 'axios';
import Session from 'react-session-api';
import useLocalStorage from "use-local-storage";
import { useAppContext } from '../../context/Context';



import './login.css';

function Login() {

    const [store, setStore] = useAppContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImluZm9AZ29sb2phbi5jb20iLCJhcGlLZXkiOiI3N0pFM05BLTc2VEUyWVEtVTY0WTJSSS1JR0c3V0FBIiwiaWF0IjoxNjYwNjEyNzkxfQ.TcU9gxjyXLAs3i_0k9IehX8R4_Dofgwf_bPOLLDu2uA'
    }
    function Logon() {
        axios.post("http://localhost:5000/api/v1/users/logon", { username: username, password: password }, { headers: headers })
            .then((res) => {
                Session.clear();
                let status = parseInt(res.data.status);
                if (status) {
                    let user = res.data.data;
                    setStore({
                        user: {
                            userId: user._id
                        }
                    });
                    window.location = "/dashboard/";
                }
            });
    }
    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-center py-5 px-4 px-sm-5">
                                <div className="brand-logo">
                                    <img src="./assets/imgs/logo.png" style={{ width: 90 }} alt="National Archives" />
                                </div>
                                <h4>National Archives, <strong>Enugu</strong></h4>
                                <h6 className="font-weight-light">Sign in to continue.</h6>
                                <form className="pt-3" action="/login/signin" encType="application/x-www-form-urlencoded" method="post">
                                    <div className="form-group">
                                        <input type="email" autoComplete='off' required aria-required="true" className="form-control form-control-lg" id="email" name="email" placeholder="Email Address" onChange={e => setUsername(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" autoComplete='off' required aria-required="true" className="form-control form-control-lg" name="password" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                                    </div>
                                    <div className="mt-3">
                                        <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="button" onClick={Logon}>
                                            SIGN IN
                                        </button>
                                    </div>
                                    <div className="my-2 d-flex justify-content-between align-items-center">
                                        <div className="form-check">
                                            <label className="form-check-label text-muted">
                                                <input type="checkbox" className="form-check-input" />
                                                Keep me signed in
                                            </label>
                                        </div>
                                        <span className="text-right">
                                            <span className="font-weight-medium text-success">Database Ready</span>
                                        </span>
                                    </div>
                                    <div className="text-center mt-4 font-weight-light">
                                        Don't have an account? <a href="#" className="text-primary">Create</a><br />
                                        <em>Powered by De-Golojan Technologies Ltd.</em>
                                    </div>
                                </form>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        </div >
    )
}
export default Login;
