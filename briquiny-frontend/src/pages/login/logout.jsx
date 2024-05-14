function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    window.location.href = "/"
}

export default logout