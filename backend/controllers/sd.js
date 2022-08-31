import express from 'express';
import dotenv from 'dotenv';

import SdModel from '../models/sdModel.js';

import { EthrDID } from 'ethr-did';
import { createVerifiableCredentialJwt } from 'did-jwt-vc';

const router = express.Router();

export const getSds = async (req, res) => {
    try {
        const sds = await SdModel.find();

        res.status(200).json(sds);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createSd = async (req, res) => {
    const { id, authorDid, entity, title, description, type, typeData, levelData,
        formatData, originalData, personalData, labelData, accessData, accessType,
        urlType, documentation, conditions, licence } = req.body;

    const issuer = new EthrDID({
        identifier: process.env.PUBLIC_KEY,
        privateKey: process.env.PRIVATE_KEY,
        chainNameOrId: 'rinkeby'
    })

    const vcPayload = {
        sub: authorDid,
        vc: {
            '@context': ['https://www.w3.org/2018/credentials/v1'],
            type: ['VerifiableCredential', 'Self-Description'],
            credentialSubject: {
                type: 'Self Description DASES',
                title: title,
                id: id,
                authorDid: authorDid,
                entity: entity,
                description: description,
                type: type,
                typeData: typeData,
                levelData: levelData,
                formatData: formatData,
                originalData: originalData,
                personalData: personalData,
                labelData: labelData,
                accessData: accessData,
                accessType: accessType,
                urlType: urlType,
                documentation: documentation,
                conditions: conditions,
                licence: licence
            }
        }
    }

    const sdJwt = await createVerifiableCredentialJwt(vcPayload, issuer)
    const newSd = new SdModel({
        id, authorDid, entity, title, description, type,
        typeData, levelData, formatData, originalData, personalData, labelData,
        accessData, accessType, urlType, documentation, conditions, licence, sdJwt
    })

    try {
        await newSd.save();

        res.status(201).json(newSd);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;