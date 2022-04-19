import sign from '../features/sign'

import { useDispatch, useSelector } from 'react-redux';
import { connectReducer, walletReducer, onboardedReducer, accountReducer, didReducer } from '../features/reducers/connectionSlice';
import { useNavigate } from 'react-router-dom';

const Connection = ({ buttonName, typeConnection, id }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const usersList = useSelector((state) => state.usersList.user);

    const handleConnect = async () => {
        if (window.ethereum) {
            const verifyVC = async () => {
                const currentUser = await usersList.filter(users => (users.did === ethrDid.did))
                dispatch(didReducer(ethrDid.did));
                if (currentUser[0] != null) {
                    dispatch(connectReducer(true));
                    dispatch(accountReducer(currentUser[0]));
                    dispatch(onboardedReducer(true));
                    switch(typeConnection) {
                        case 'header': navigate("/dashboard/myoffer");
                        break;
                        case 'add': navigate("/dashboard/add");
                        break;
                        case 'use': navigate(`/dashboard/service/${id}`);
                        break;
                        default: console.log("Problème d'usage du bouton Connexion");
                    }
                } else {
                    dispatch(accountReducer({}));
                    dispatch(onboardedReducer(false));
                    navigate("/vc");
                }
            }
            
            const texte = `Signer pour s'authentifier sur Dases Lab`;
            const ethrDid = await sign(texte);
            await verifyVC();

        }
        else {
            console.log('Pas de Metamask');
            dispatch(walletReducer(false));
            navigate("/metamask");
        }
    }

    return (
        <button className="button blackButton connectWallet" onClick={handleConnect} >{buttonName}</button>
    )
}

export default Connection;
