import { useNavigate, useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';

const useRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const searchParams = queryString.parse(location.search);

  return {
    push: (to: string) => navigate(to),
    replace: (to: string) => navigate(to, { replace: true }),
    pathname: location.pathname,
    location,
    params: {
      ...params,
      ...searchParams,
    },
  };
};

export default useRouter;
