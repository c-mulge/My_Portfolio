'use client'

import ProjectNave from "@/components/Project/Navebar/ProjectNave";

const ProjectLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="bg-[#131313] text-[#ECE7E1] h-screen">
            <ProjectNave className="fixed top-0 w-full z-50"/>  
            {children}
        </div>
    )
}

export default ProjectLayout;