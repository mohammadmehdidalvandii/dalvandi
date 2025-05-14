import React from 'react'
import ProfileSetting from '../ProfileSetting/ProfileSetting'
import ContentSetting from '../ContentSetting/ContentSetting'

function Setting() {
  return (
    <section className="admin_box py-6">
          <div className="block static">
            <h6 className="block font-roboto-black text-xl text-primary">Settings  Management</h6>
        </div>
        <div className="block mt-8
        *:block *:p-4 *:bg-white *:drop-shadow-md *:rounded-sm *:border-t-3 *:border-secondary-200 *:mb-6
        ">
            <ProfileSetting/>
            <ContentSetting/>
        </div>
    </section>
  )
}

export default Setting