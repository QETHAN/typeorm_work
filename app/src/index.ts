import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import { Photo } from "./entity/Photo";
import { PhotoMetadata } from "./entity/PhotoMetadata";

createConnection().then(async connection => {

    // let photo = new Photo();
    // photo.name = "Me and Bears";
    // photo.description = "I am near polar bears";
    // photo.filename = "photo-with-bears.jpg";
    // photo.views = 1;
    // photo.isPublished = true;

    // return connection.manager
    //         .save(photo)
    //         .then(photo => {
    //             console.log("Photo has been saved. Photo id is", photo.id);
    //         });

    // let savedPhotos = await connection.manager.find(Photo);
    // console.log("All photos from the db: ", savedPhotos);


    // create a photo
    let photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;

    // // create a photo metadata
    // let metadata = new PhotoMetadata();
    // metadata.height = 640;
    // metadata.width = 480;
    // metadata.compressed = true;
    // metadata.comment = "cybershoot";
    // metadata.orientation = "portait";
    // metadata.photo = photo; // this way we connect them

    // // get entity repositories
    // let photoRepository = connection.getRepository(Photo);
    // let metadataRepository = connection.getRepository(PhotoMetadata);

    // // first we should save a photo
    // await photoRepository.save(photo);

    // // photo is saved. Now we need to save a photo metadata
    // await metadataRepository.save(metadata);

    // // done
    // console.log("Metadata is saved, and relation between metadata and photo is created in the database too");

    
    let photoRepository = connection.getRepository(Photo);
    let photos = await photoRepository.find({ relations: ["metadata"] });
    console.log(photos);

}).catch(error => console.log(error));
