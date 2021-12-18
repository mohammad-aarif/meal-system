import useTotalmealAdmin from "./useTotalmealAdmin"
import useAuth from './useAuth'
const useMealRate = () => {
    const {user} = useAuth()
    const {mealsCountAdmin} = useTotalmealAdmin(user.email);
    const avg = mealsCountAdmin;

    return {avg}
}
export default useMealRate; 