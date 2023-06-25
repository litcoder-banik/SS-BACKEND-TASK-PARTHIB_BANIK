import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AddMovie } from "./admin.dto";

@Controller("/admin")
export class AdminController{

    constructor(private adminservice: AdminService){}

    //-----Add Movie-----//
    @Post("/addmovie")
    addMovie(
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('relesedate') relesedate: Date,
        @Body('duration') duration: number,
        @Body('rating') rating: number,
        @Body('createat') createat: Date,
        @Body('updateat') updateat: Date,
        @Body('actors') actorNames: string[],
        @Body('director') directorNames: string[],
    ): any
    {
        const movie = this.adminservice.addMovie(title, description, relesedate, duration, rating, createat, updateat, actorNames, directorNames);
        return { message: 'Movie registered successfully', data: movie };
    }

    //-----Add Tv - Serires-----//
    @Post("/addtv")
    addTv(
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('relesedate') relesedate: Date,
        @Body('season') season: number,
        @Body('rating') rating: number,
        @Body('createat') createat: Date,
        @Body('updateat') updateat: Date,
        @Body('actors') actorNames: string[],
        @Body('director') directorNames: string[],
    ): any{
        const tv = this.adminservice.addTv(title, description, relesedate, season, rating, createat, updateat, actorNames, directorNames);
        return { message: 'Tv-seires registered successfully', data: tv};
    }


    //-----Show All Movies with Actor and Director names-----//
    @Get("/showmovie")
    async slowallMovie() {
        const movies = await this.adminservice.slowallMovie();
        return { data: movies };
    }


    //-----Show All Tv-series with Actor and Director names-----//
    @Get("/showtv")
    async slowallTv() {
        const tv = await this.adminservice.slowallTv();
        return { data: tv };
    }
}