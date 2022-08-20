import { useEffect, useState } from 'react'
function People(){
    const [users, setUsers] = useState([])
    const someCss = {
        display: "flex ",
        flexWrap: "wrap ",
        justifyContent: "space-between "
    }
    useEffect(() => {
        fetch("https://randomuser.me/api?results=100")
        .then(response => response.json())
        .then(data => setUsers(data.results))
        }, [])
    return <div style={someCss}>
    {
        users.map((elm,i) => {
            return <div key={i}>
                <img src={elm.picture.large}/>
                <h3>{elm.name.first}</h3>
                </div>
            }
        )
    }
    </div>
}
export default People