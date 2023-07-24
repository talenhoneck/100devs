//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class MakeNetflixTVShows{
    constructor (title,length,genre,rating){
    this.title = title
    this.length = length
    this.genre = genre
    this.rating = rating
    }
    trashy(){
        console.log('You will be so embarrased!')
    }
    binge(){
        console.log('Are you still watching?')
    }
    goodChoice (){
        console.log('You will hate yourself tomorrow')
    }
}
let stargate = new MakeNetflixTVShows('stargate','45 minutes','scifi','5/5')

