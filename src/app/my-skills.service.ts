export class MySkillsService{
  private skills:string[]=['Js','HTML','CSS','Sass','TS'];
  getSkills():string[]{
    return this.skills;
  }
}
