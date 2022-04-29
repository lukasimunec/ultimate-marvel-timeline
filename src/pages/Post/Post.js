import React, { useState } from "react";
import ReactGA from 'react-ga';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import html2canvas from "html2canvas";
import Modal from 'react-modal';

import Tweet from '../../components/Tweet/Tweet.js'
import Facebook from '../../components/Facebook/Facebook.js'
import Instagram from '../../components/Instagram/Instagram.js'

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import './Post.css'
import HeadNav from "../../components/HeadNav.js";

const Post = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  //TWITTER
  const [tweetUrl, setTweetUrl] = useState("https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzAyMDMwMjQzNTA1NTA0/donald_trump_photo_michael_stewartwireimage_gettyimages-169093538jpg.jpg")
  const [tweetUsername, setTweetUsername] = useState("Donald J. Trump")
  const [tweetHandle, setTweetHandle] = useState("realDonaldTrump")
  const [tweetContent, setTweetContent] = useState("can confirm, 0$ paid to @bronion #buymeacoffee")
  const [tweetTime, setTweetTime] = useState("3:04 PM")
  const [tweetDate, setTweetDate] = useState("Nov 3, 2021")
  const [tweetDevice, setTweetDevice] = useState("iPhone")
  const [tweetRetweets, setTweetRetweets] = useState("12")
  const [tweetQTweets, setTweetQTweets] = useState("58")
  const [tweetLikes, setTweetLikes] = useState("5,829")

  //FACEBOOK
  const [fbUrl, setFbUrl] = useState("https://i.pinimg.com/originals/4f/a1/41/4fa141173a1b04470bb2f850bc5da13b.png")
  const [fbUsername, setFbUsername] = useState("Dark Knight")
  const [fbContent, setFbContent] = useState("can confirm, 0$ paid to @bronion #buymeacoffee")
  const [fbDate, setFbDate] = useState("Nov 3, 2021 at 3:04 PM")
  const [fbReactions, setFbReactions] = useState("Tony Stark, Logan and 9487 others")
  const [fbComments, setFbComments] = useState("12")
  const [fbUserUrl, setFbUserUrl] = useState("https://avatarfiles.alphacoders.com/813/81320.jpg")

  const [fbComment, setFbComment] = useState(true)

  const [fbCommentUsername, setFbCommentUsername] = useState("Thanos")
  const [fbCommentUrl, setFbCommentUrl] = useState("https://i1.sndcdn.com/avatars-000472635192-bk5zvc-t500x500.jpg")
  const [fbCommentContent, setFbCommentContent] = useState("You're not the only one cursed with knowledge")
  const [fbCommentDate, setFbCommentDate] = useState("20h")

  //INSTAGRAM
  const [igUrl, setIgUrl] = useState("https://www.theaudiodb.com/images/media/artist/thumb/trxxtx1488641405.jpg")
  const [igUsername, setIgUsername] = useState("therock")
  const [igPicUrl, setIgPicUrl] = useState("https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE4XFxcLzA0XFxcLzMwMTA0OTQ3XFxcL1VudGl0bGVkLWRlc2lnbi0xMTEucG5nXCIsXCJ3aWR0aFwiOjQ0MyxcImhlaWdodFwiOjI0OCxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3LmpvZS5pZVxcXC9hc3NldHNcXFwvaW1hZ2VzXFxcL2pvZVxcXC9uby1pbWFnZS5wbmc_aWQ9MjY0YTJkYmUzNzBmMmM2NzVmY2RcIixcIm9wdGlvbnNcIjpbXX0iLCJoYXNoIjoiOWM5YzFlYWQ4YWVmNjQxYjIxM2ZmOWEyNjY2ZGVmNmFjYjNhMDg3NiJ9/the-rock-has-photoshopped-kevin-hart-onto-a-picture-of-his-baby-daughter.png")
  const [igLikeUser, setIgLikeUser] = useState("bronion")
  const [igLikes, setIgLikes] = useState("18.086")
  const [igContent, setIgContent] = useState("can confirm, 0$ paid to @bronion #buymeacoffee")
  const [igComments, setIgComments] = useState("299")
  const [igComment1, setIgComment1] = useState(true)
  const [igCommentUser1, setIgCommentUser1] = useState("kevinhart4real")
  const [igCommentContent1, setIgCommentContent1] = useState("What is this???")
  const [igComment2, setIgComment2] = useState(false)
  const [igCommentUser2, setIgCommentUser2] = useState("bronion")
  const [igCommentContent2, setIgCommentContent2] = useState("Haha")
  const [igDate, setIgDate] = useState("2 hours ago")

  function capture(id) {

    var vp = document.getElementById("viewportMeta").getAttribute("content");

    document.getElementById("viewportMeta").setAttribute("content", "width=800");

    html2canvas(document.querySelector("#" + id), { allowTaint: true }).then(canvas => {
      openModal();
      document.getElementById("export").innerHTML = "";
      document.getElementById("export").appendChild(canvas);
    }).then(function () {
      document.getElementById("viewportMeta").setAttribute("content", vp);
    });
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgb(44, 44, 44)'
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <HeadNav title={"FAKE A POST"} />
      <br />
      <div className="row justify-content-center">
        <Tabs>
          <TabList>
            <Tab><FiTwitter size={30} /> Twitter</Tab>
            <Tab><FiFacebook size={30} /> Facebook</Tab>
            <Tab><FiInstagram size={30} /> Instagram</Tab>
          </TabList>

          <TabPanel>
            <br /><br /><br />
            <div className="row justify-content-center">
              <div className="col-12 col-md-7">
                <Tweet
                  url={tweetUrl}
                  username={tweetUsername}
                  handle={tweetHandle}
                  content={tweetContent}
                  time={tweetTime}
                  date={tweetDate}
                  device={tweetDevice}
                  retweets={tweetRetweets}
                  qtweets={tweetQTweets}
                  likes={tweetLikes} />
                <br />
                <div className="row justify-content-center">
                  <button onClick={() => capture("tweet")} className="btn btn-warning col-6">Export as Image</button>
                </div>
              </div>

              <div className="col-10 offset-md-1 col-md-4">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Profile Picture URL</label>
                    <input value={tweetUrl} onChange={e => { setTweetUrl(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input value={tweetUsername} onChange={e => { setTweetUsername(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Handle</label>
                    <input value={tweetHandle} onChange={e => { setTweetHandle(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Content</label>
                    <input value={tweetContent} onChange={e => { setTweetContent(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Time</label>
                    <input value={tweetTime} onChange={e => { setTweetTime(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Date</label>
                    <input value={tweetDate} onChange={e => { setTweetDate(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Device</label>
                    <input value={tweetDevice} onChange={e => { setTweetDevice(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Retweets</label>
                    <input value={tweetRetweets} onChange={e => { setTweetRetweets(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Quote Tweets</label>
                    <input value={tweetQTweets} onChange={e => { setTweetQTweets(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Likes</label>
                    <input value={tweetLikes} onChange={e => { setTweetLikes(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                </form>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <br /><br /><br />
            <div className="row justify-content-center">
              <div className="col-12 col-md-7">
                <Facebook
                  url={fbUrl}
                  username={fbUsername}
                  content={fbContent}
                  date={fbDate}
                  reactions={fbReactions}
                  comments={fbComments}
                  userUrl={fbUserUrl}
                  comment={fbComment}
                  commentUrl={fbCommentUrl}
                  commentUsername={fbCommentUsername}
                  commentContent={fbCommentContent}
                  commentDate={fbCommentDate}
                />
                <br />
                <div className="row justify-content-center">
                  <button onClick={() => capture("facebook")} className="col-6 btn btn-warning">Export as Image</button>
                </div>
              </div>

              <div className="col-10 offset-md-1 col-md-4">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Profile Picture URL</label>
                    <input value={fbUrl} onChange={e => { setFbUrl(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input value={fbUsername} onChange={e => { setFbUsername(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Date</label>
                    <input value={fbDate} onChange={e => { setFbDate(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Content</label>
                    <input value={fbContent} onChange={e => { setFbContent(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Reactions</label>
                    <input value={fbReactions} onChange={e => { setFbReactions(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Comments</label>
                    <input value={fbComments} onChange={e => { setFbComments(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">User Profile URL</label>
                    <input value={fbUserUrl} onChange={e => { setFbUserUrl(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>

                  <br />
                  <div className="form-check">
                    <input defaultChecked={fbComment} onChange={() => setFbComment(!fbComment)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Show comment</label>
                  </div>

                  {fbComment ?
                    <div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Comment User Profile Picture URL</label>
                        <input value={fbCommentUrl} onChange={e => { setFbCommentUrl(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Comment Username</label>
                        <input value={fbCommentUsername} onChange={e => { setFbCommentUsername(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Comment Content</label>
                        <input value={fbCommentContent} onChange={e => { setFbCommentContent(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Comment Date</label>
                        <input value={fbCommentDate} onChange={e => { setFbCommentDate(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                      </div>
                    </div> : null
                  }
                </form>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <br /><br /><br />
            <div className="row justify-content-center">
              <div className="col-12 col-md-4">
                <Instagram
                  url={igUrl}
                  username={igUsername}
                  picUrl={igPicUrl}
                  likeUsername={igLikeUser}
                  likes={igLikes}
                  content={igContent}
                  comments={igComments}
                  comment1={igComment1}
                  comment2={igComment2}
                  commentUser1={igCommentUser1}
                  commentUser2={igCommentUser2}
                  commentContent1={igCommentContent1}
                  commentContent2={igCommentContent2}
                  date={igDate} />
                <br />
                <div className="row justify-content-center">
                  <button onClick={() => capture("instagram")} className="col-6 btn btn-warning">Export as Image</button>
                </div>
              </div>
              <div className="col-10 offset-md-1 col-md-4">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Profile Picture URL</label>
                    <input value={igUrl} onChange={e => { setIgUrl(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input value={igUsername} onChange={e => { setIgUsername(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Picture URL</label>
                    <input value={igPicUrl} onChange={e => { setIgPicUrl(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Like username</label>
                    <input value={igLikeUser} onChange={e => { setIgLikeUser(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Likes</label>
                    <input value={igLikes} onChange={e => { setIgLikes(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Content</label>
                    <input value={igContent} onChange={e => { setIgContent(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Comments</label>
                    <input value={igComments} onChange={e => { setIgComments(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Date</label>
                    <input value={igDate} onChange={e => { setIgDate(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                  </div>

                  <br />
                  <div className="form-check">
                    <input defaultChecked={igComment1} onChange={() => setIgComment1(!igComment1)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Show first comment</label>
                  </div>

                  {igComment1 ?
                    <div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Comment Username</label>
                        <input value={igCommentUser1} onChange={e => { setIgCommentUser1(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Comment Content</label>
                        <input value={igCommentContent1} onChange={e => { setIgCommentContent1(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                      </div>
                    </div> : null
                  }
                  <br />
                  <div className="form-check">
                    <input defaultChecked={igComment2} onChange={() => setIgComment2(!igComment2)} type="checkbox" className="form-check-input" id="exampleCheck2" />
                    <label className="form-check-label" htmlFor="exampleCheck2">Show second comment</label>
                  </div>

                  {igComment2 ?
                    <div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Comment Username</label>
                        <input value={igCommentUser2} onChange={e => { setIgCommentUser2(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Comment Content</label>
                        <input value={igCommentContent2} onChange={e => { setIgCommentContent2(e.target.value) }} type="text" className="form-control" placeholder="Enter username" />
                      </div>
                    </div> : null
                  }
                </form>
              </div>
            </div>
          </TabPanel>
        </Tabs>

        <Modal
          ariaHideApp={false}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal">
          <div id="export" className="col-12 img-fluid" />
          <div className="row justify-content-center">
            <button className="col-6 btn btn-secondary" onClick={closeModal}>Close</button>
          </div>
        </Modal>
      </div>
    </div >
  )
}

export default Post