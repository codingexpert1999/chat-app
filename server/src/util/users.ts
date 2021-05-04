let users: {id: string, username: string}[] = []

export const userJoin = (id: string, username: string): boolean => {
    let user = users.find(user => user.username === username);

    if(user){
        return false;
    }

    users.push({id, username});

    return true;
}

export const userLeft = (id: string) => {
    users = users.filter(user => user.id !== id);
}

export const getUsers = () => users;