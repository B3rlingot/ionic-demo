import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	heroes:any = [
		{
			"realname": "Bruce Wayne",
			"name": "Batman",
			"cover": "http://www.premiere.fr/sites/default/files/styles/premiere_article/public/thumbnails/image/batman_9.jpg",
			"editor": "DC",
			"movies": [
				{ "title": "Batman Begins", "date": "2005-06-15"},
				{ "title": "The Dark Knight", "date": "2008-08-13"},
				{ "title": "The Dark Knight Rises", "date": "2012-07-25"}
			]
		},
		{
			"realname": "Clark Kent",
			"name": "Superman",
			"cover": "http://media.rtl.fr/cache/eObl-Z3UX5IRabNv_YQ9Ug/880v587-0/online/image/2016/0816/7784461725_henri-cavill-incarne-superman-depuis-2013-et-man-of-steel.PNG",
			"editor": "DC",
			"movies": [
				{ "title": "Man of Steel", "date": "2013-07-05"},
			]
		},
		{
			"realname": "Peter Jason Quill",
			"name": "Star-Lord",
			"cover": "https://i.pinimg.com/originals/d7/5e/3a/d75e3ad80a2a4095c9065cc71389af6e.jpg",
			"editor": "Marvel",
			"movies": [
				{ "title": "Les gardiens de la galaxie", "date": "2014-03-20"},
				{ "title": "Les gardiens de la galaxie vol2", "date": "2017-09-16"}
			]
		}

	]

  constructor(public navCtrl: NavController) {

  }

}
