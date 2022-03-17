import { Fragment, useEffect } from 'react';
import Header from '../component/Header'
import Footer from '../component/Footer'
import Connection from '../component/Connection';
import inokufuLogo from '../assets/logos/inokufu.png'
import { useDispatch, useSelector } from 'react-redux';
import { addAsyncVisions } from '../features/reducers/visionsSlice';
import { fetchAsyncServices } from '../features/reducers/serviceSlice';
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
	useEffect(() => {
		dispatch(fetchAsyncServices());
	}, [dispatch])
	const servicesList = useSelector((state) => state.servicesList.service);
	const service = servicesList[0];
	
	if (!servicesList.length) return <h3>Loading...</h3>;
    console.log(service);


    const data = {
        providerJwt: 'eyJhbGciOiJFUzI1NkstUiIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRGFzZXNJZGVudGl0eSJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJzdGF0ZW1lbnQiOnsidHlwZSI6IkNlcnRpZmljYXQgUGFydGljaXBhbnQgREFTRVMiLCJkaWRPd25lciI6ImRpZDpldGhyOjB4NDoweDI0NDRiQURmQTc2Q2JDMzA3NkRDNUZFOERCMmFkRjY1OTUwRTdlYkYiLCJnaXZlbk5hbWUiOiJQZXJyaW4yIiwiZmFtaWx5TmFtZSI6IkdSQU5ETkUyIiwiZW1haWxPd25lciI6InBlcnJpbi5ncmFuZG5lQGdtYWlsLmNvbSIsImNvbXBhbnlOYW1lIjoiTUVOSlMiLCJjb21wYW55QWRyZXNzIjoiMTEwIFJ1ZSBkZSBHcmVuZWxsZSwgNzUwMDYgUGFyaXMiLCJsZWdhbFJlcHJlc2VudGF0aXZlIjoiUGVycmluIEdSQU5ETkUyIiwiZW1haWxMZWdhbFJlcHJlc2VudGF0aXZlIjoicGVycmluLmdyYW5kbmVAZ21haWwuY29tIn19fSwic3ViIjoiZGlkOmV0aHI6MHg0OjB4MjQ0NGJBRGZBNzZDYkMzMDc2REM1RkU4REIyYWRGNjU5NTBFN2ViRiIsIm5iZiI6MTY0NjQyNTEyOSwiaXNzIjoiZGlkOmV0aHI6cmlua2VieToweGM1QTc1YmE4Nzg3NmIyMzcyNjViMDVGODQ4MTYwZjU0ZDM2Q2EwNjUifQ.OHp2wGrv_GXD3GFK9npvAYtiP7S5AYT497m3CWkLrsj9k7ClrmKn1yjxB7JCkpoz7nd-h_nqcM0PLDvdGTgKmAE"',
        sdJwt: 'eyJhbGciOiJFUzI1NkstUiIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiU2VsZkRlc2NyaXB0aW9uIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7InN0YXRlbWVudCI6eyJoYXNTZXJ2aWNlVGl0bGUiOiJGb3JtYXRpb25zIGluaXRpYWxlcyBlbiBGcmFuY2UiLCJoYXNTZXJ2aWNlRGVzY3JpcHRpb24iOiJDZSBqZXUgZGUgZG9ubsOpZXMgZXN0IHJlcHJpcyBkZSBsYSBwbGF0ZWZvcm1lIG9wZW5kYXRhIGRlIGwnT05JU0VQIiwiaGFzS2V5d29yZCI6WyJlZHVjYXRpb24iLCJ0cmFpbmluZyJdLCJoYXNEYXRhVHlwZSI6WyJEaXBsb21lcyIsIkNvbXBldGVuY2VzIiwiRm9ybWF0aW9uIiwiQmFkZ2UiXSwicHJvdmlkZWRCeSI6Ik1FTkpTIiwiaGFzUHJvdmlzaW9uVHlwZSI6IlB1YmxpY1Byb3Zpc2lvbmluZyIsImhhc1NlcnZpY2VNb2RlbCI6IkRhYVMiLCJoYXNXZWJBZGRyZXNzIjoiaHR0cHM6Ly9kYXRhLmVkdWNhdGlvbi5nb3V2LmZyL2V4cGxvcmUvZGF0YXNldC9mci1lbi1mb3JtYXRpb25zLWluaXRpYWxlcy1lbi1mcmFuY2UvaW5mb3JtYXRpb24iLCJ0eXBlU2VydmljZU9mZmVyaW5nIjoiRGF0YSIsImRpZE93bmVyIjoiZGlkOmV0aHI6MHg0OjB4MjQ0NGJBRGZBNzZDYkMzMDc2REM1RkU4REIyYWRGNjU5NTBFN2ViRiIsIm5hbWVPd25lciI6IlBlcnJpbiBHUkFORE5FIiwiY29tcGFueU93bmVyIjoiTUVOSlMiLCJlbWFpbE93bmVyIjoicGVycmluLmdyYW5kbmVAZWR1Y2F0aW9uLmdvdXYuZnIifX19LCJzdWIiOiJkaWQ6ZXRocjoweDQ6MHgyNDQ0YkFEZkE3NkNiQzMwNzZEQzVGRThEQjJhZEY2NTk1MEU3ZWJGIiwibmJmIjoxNjQ2NDI1MTI5LCJpc3MiOiJkaWQ6ZXRocjpyaW5rZWJ5OjB4YzVBNzViYTg3ODc2YjIzNzI2NWIwNUY4NDgxNjBmNTRkMzZDYTA2NSJ9.Q-tpnFLFisf8aH08gt-LIc2rF5wrmU2cnmRZX5yQsVZe6t-7smAjvjwbK5OQlv8FW24w4O6TennS0ji_0lpifQE',
        userJwt: 'eyJhbGciOiJFUzI1NkstUiIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRGFzZXNJZGVudGl0eSJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJzdGF0ZW1lbnQiOnsidHlwZSI6IkNlcnRpZmljYXQgUGFydGljaXBhbnQgREFTRVMiLCJkaWRPd25lciI6ImRpZDpldGhyOjB4NDoweGEzNTM0ZTQ1RTMzYUMxOTQzYkNCODc1MThlMzQ2RjhENEY3MDZDNzciLCJnaXZlbk5hbWUiOiJQZXJyaW4zIiwiZmFtaWx5TmFtZSI6IkdSQU5ETkUzIiwiZW1haWxPd25lciI6InBlcjFAaG90bWFpbC5mciIsImNvbXBhbnlOYW1lIjoiTUVOSlMiLCJjb21wYW55QWRyZXNzIjoiMTEwIFJ1ZSBkZSBHcmVuZWxsZSwgNzUwMDYgUGFyaXMiLCJsZWdhbFJlcHJlc2VudGF0aXZlIjoiUGVycmluIEdSQU5ETkUyIiwiZW1haWxMZWdhbFJlcHJlc2VudGF0aXZlIjoicGVyMUBob3RtYWlsLmZyIn19fSwic3ViIjoiZGlkOmV0aHI6MHg0OjB4YTM1MzRlNDVFMzNhQzE5NDNiQ0I4NzUxOGUzNDZGOEQ0RjcwNkM3NyIsIm5iZiI6MTY0NjQyNTEyOSwiaXNzIjoiZGlkOmV0aHI6cmlua2VieToweGM1QTc1YmE4Nzg3NmIyMzcyNjViMDVGODQ4MTYwZjU0ZDM2Q2EwNjUifQ.lsRWC4FMzqVrEXN8azDORhmT78IeypjZLB5KKln0J3E0Vel1thHDKzJeZu0eMuxczqoEeMsdkv8JjjcPIsl3zAA'
    }
    const buttonName = "Demander l'intégration";
    const handleBack = () => {
        navigate(-1);
    }

    const handleIntegration = () => {
        console.log(data)
        dispatch(addAsyncVisions(data));

    }

    return (
        <Fragment>
            <Header />
            <ul className="container breadcrumb flex row">
                <li className="back"><button onClick={handleBack}>retour</button></li>
                <li><button onClick={handleBack}>catalogue</button></li>
                <li className="current"><button onClick={handleBack}>Inokufu Competency V2</button></li>
            </ul>

            <main className="container sectionContent">

                <section className="container servicePageTitle flex row">
                    <img src={inokufuLogo} alt="" />
                    <div>
                        <h1>{service.title}</h1>
                        <a href={service.documentation}>Documentation</a>
                    </div>
                    <ul className="ctas">
                        <li><button className="useService button blackButton" onClick={handleIntegration}>Demander l'intégration</button></li>
                    </ul>
                </section>

                <section className="container servicePageContent flex wrap column">
                    <div className="serviceDetails flex-1">
                        <table>
                            <thead>
                                <tr>
                                    <td colSpan="2">
                                        <h2>Détails</h2>
                                    </td>
                                </tr>
                            </thead>
                            <tr>
                                <td>Type</td>
                                <td>{service.typeData}</td>
                            </tr>
                            <tr>
                                <td>Niveau</td>
                                <td>{service.levelData}</td>
                            </tr>
                            <tr>
                                <td>STANDARD</td>
                                <td>{service.formatData}</td>
                            </tr>
                            <tr>
                                <td>LICENCE</td>
                                <td>MIT</td>
                            </tr>
                            <tr>
                                <td>Données personnelles</td>
                                <td>{service.personalData}</td>
                            </tr>
                            <tr>
                                <td>Label Gaia-X</td>
                                <td>{service.labelData}</td>
                            </tr>
                            <tr>
                                <td>Conditions d’utilisation</td>
                                <td><a href={service.conditions} className="button whiteButton external block">{service.conditions}</a></td>
                            </tr>

                        </table>
                    </div>
                    <div className="serviceDescription flex-1">
                        <h2>Description</h2>
                        <p>{service.description}</p>
                    </div>
                </section>

            </main>
            <Footer />
        </Fragment>

    )
}

export default Service;
