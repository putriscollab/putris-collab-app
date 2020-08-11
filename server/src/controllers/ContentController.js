// index, show, store, update, destroy
const Content = require('../models/Content')

module.exports = {
  
  /**
  * 
  * To be implemented ( Search by tag )
  * 
  */
  async index(req, res){

    // const { tags } = req.query
    // const contents = await Content.find({ tags: tag})
    
    const contents = await Content.find()

    return res.json(contents)

  },


  async store(req, res){

  // playslist	boolean	Playlist on single video
  // ytID	String	Youtube ID
  // user	user._id	user that added the list/video on the platform
  // title	String	got from first video
  // tags	Array<String>	tags that the video is related
  // totalRate	number	Average rate, updated with a new rating
  // dateCreated	String	created date

    const {playslist, ytID, title, tagsString } = req.body

    const tags = tagsString.toLowerCase().split(',').map( tag => tag.trim())

    const { user_id } = req.headers

    const user = await User.findById(user_id)

    if (!user){
      return res.status(400).json({error: 'User does not exist!'})
    }

    const content = await Content.create({
      playslist,
      ytID,
      title,
      tags : tagsString.toLowerCase().split(',').map( tag => tag.trim()),
      user,
    })

    return res.json(content)
  }
}