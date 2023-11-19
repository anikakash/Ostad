import React from 'react'

const Partner = () => {
  return (
    <>
      <div className="partner-area py-20">
        <div className="grid grid-cols-12 lg:grid-cols-5 container mx-auto">
            <div className="col-span-4 lg:col-span-1 mx-auto">
                <img src='google.png' alt="google" />
            </div>
            <div className="col-span-4 lg:col-span-1 mx-auto">
                <img src='Trello.png' alt="trello" />
            </div>
            <div className="col-span-4 lg:col-span-1 mx-auto">
                <img src='monday.png' alt="monday" />
            </div>
            <div className="col-span-4 lg:col-span-1 mx-auto">
                <img src='Notion.png' alt="notion" />
            </div>
            <div className="col-span-4 lg:col-span-1 flex justify-center">
                <img src='Slack.png' alt="slack" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Partner
