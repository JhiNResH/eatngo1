import React from 'react';

const SolanaUser = ({ user }) => {
    return (
        <header>
            <h1>{user.name}</h1>
        </header>
    );
}
export default SolanaUser;