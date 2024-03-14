import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log(`
  ______                                 ______   __       
 /      \                               /      \ /  |      
/$$$$$$  |  ______   ______    ______  /$$$$$$  |$$ |      
$$ | _$$/  /      \ /      \  /      \ $$ |  $$ |$$ |      
$$ |/    |/$$$$$$  |$$$$$$  |/$$$$$$  |$$ |  $$ |$$ |      
$$ |$$$$ |$$ |  $$/ /    $$ |$$ |  $$ |$$ |_ $$ |$$ |      
$$ \__$$ |$$ |     /$$$$$$$ |$$ |__$$ |$$ / \$$ |$$ |_____ 
$$    $$/ $$ |     $$    $$ |$$    $$/ $$ $$ $$< $$       |
 $$$$$$/  $$/       $$$$$$$/ $$$$$$$/   $$$$$$  |$$$$$$$$/ 
                             $$ |           $$$/           
                             $$ |                          
                             $$/                           
`);
}
bootstrap();
