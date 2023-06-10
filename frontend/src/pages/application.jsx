import ApplicationForm from "../components/application-form"

const Application = ({user})=>{

    return <div className="application-page">
        <div className="page-size" >
            <ApplicationForm user={user}/>
        </div>
    </div>
}
export default Application