import { usePassContext } from '../contexts/PassContext';

const IsPassBlock = () => {
    const { isPass } = usePassContext();

    return (
        <>
            {!isPass.message == '' && (
                <div className={`alert ${isPass.pass ? 'alert-success' : 'alert-danger'} fixed-top w-100 overflow-auto `} role="alert">
                    {isPass.message}
                </div>
            )}
        </>
    )
}

export default IsPassBlock