import React from 'react'
import SkillCart from '../SkillCart/SkillCart'

function SkillsManagement() {
  return (
    <section className="admin_box py-6">
          <div className="flex justify-between items-center static">
            <h6 className="block font-roboto-black text-xl text-primary">Skills Management</h6>
            <button className="btn_success cursor-pointer"
            >+ Add Skill</button>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
                <SkillCart/>
                <SkillCart/>
                <SkillCart/>
                <SkillCart/>
                <SkillCart/>
        </div>
    </section>
  )
}

export default SkillsManagement