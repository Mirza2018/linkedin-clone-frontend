import { getAllUsers } from '@/config/redux/action/authAction';
import DasnboardLayout from '@/layout/DashboardLayout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Discover = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authState.usersProfileFetched) {
      dispatch(getAllUsers());
    }
  }, []);


  return (
    <DasnboardLayout>
      <div>
        <h1>Discover</h1>
      </div>
    </DasnboardLayout>
  );
};

export default Discover;