import express from 'express';

import UserModel from '../models/userModel.js';

import { EthrDID } from 'ethr-did';
import { createVerifiableCredentialJwt } from 'did-jwt-vc';

const router = express.Router();

export const getUsers = async (req, res) => {
  try {
    const userList = await UserModel.find();
    res.status(200).json(userList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createUser = async (req, res) => {
  const { did, givenName, familyName, emailOwner, companyName, companyAddress } = req.body;

  const issuer = new EthrDID({
    identifier: '0xc5A75ba87876b237265b05F848160f54d36Ca065',
    privateKey: '371f46c966c57f7fb1567839cc38952b0e364d03e91331909882e1344dddf52a',
    chainNameOrId: 1
  })

  const vcPayload = {
    sub: did,
    vc: {
      '@context': ['https://www.w3.org/2018/credentials/v1'],
      type: ['VerifiableCredential', 'Participant'],
      credentialSubject: {
        type: 'Certificat Participant DASES',
        id: did,
        givenName: givenName,
        familyName: familyName,
        emailOwner: emailOwner,
        companyName: companyName,
        companyAddress: companyAddress
      }
    }
  }

  const vcJwt = await createVerifiableCredentialJwt(vcPayload, issuer)

  const newUser = new UserModel({ did, givenName, familyName, emailOwner, companyName, companyAddress, vcJwt })
  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export default router;