import express, { Application, Request, Response } from "express";
import routes from "../routes/index";

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "3001";
        this.listen();
        this.middlewares();
        this.routes();
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is listening in port ${this.port}`)
        });
    };

    routes() {
        this.app.get("/", (req: Request, res: Response) => {
            res.json({
                msg: "Welcome, API working"
            });
        });

        this.app.use("/products", routes);
    };

    middlewares() {
        this.app.use(express.json());
    }
}

export default Server;