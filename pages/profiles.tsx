import useCurrentUser from "@/hooks/useCurrentUser";
// import{ NextPageContext } from "next";
// import { getSession } from "next-auth/react";
// add config 
import { authOptions } from './api/auth/[...nextauth]';
import { getServerSession } from "next-auth/next";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions);
    if(!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    }

    return {
        props: {},
    }
}
const Profiles = () => {
    const { data: user } = useCurrentUser();
    const router = useRouter();
    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-center">who is watching?</h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={() => router.push('/')}>

                        <div className="group flex-row w-44 mx-auto">
                            <div className="
                            h-44
                            w-44
                            rounded-md
                            flex
                            justify-center
                            items-center
                            border-2
                            border-transparent
                            overflow-hidden
                            group-hover:cursor-pointer
                            group-hover:border-white
                            ">
                                <img src="/images/default-blue.png" alt="Profile"></img>
                            </div>

                            <div className="
                            mt-4
                            text-gray-400
                            text-2xl
                            text-center
                            group-hover:text-white
                            ">
                                {user?.name}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profiles;