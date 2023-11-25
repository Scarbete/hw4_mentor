export function addUserAction(user) {
    return async function (dispatch) {
        const options = {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
        const response = await fetch("https://jsonplaceholder.typicode.com", options)
    }
}

export const addUserType = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}