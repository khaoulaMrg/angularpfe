import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../customer-services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {



  categoryForm:FormGroup;
  selectedFile: File | null;
  imagePreview:string | ArrayBuffer | null;

constructor(
  private service:CustomerService,
  private fb:FormBuilder

){}
ngOnInit(){
  this.categoryForm = this.fb.group({
    name:[null,Validators.required],
    description:[null,Validators.required],

  })
}

postCategory(){
    console.log(this.categoryForm.value);
    const formdata: FormData= new FormData();
    formdata.append("img",this.selectedFile);
    formdata.append("name",this.categoryForm.get("name").value)
    formdata.append("description",this.categoryForm.get("description").value)
    this.service.postCategory(formdata).subscribe(
      (res)=>{
        console.log(res);
      }
    )



}
onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (file) {
    this.previewImage(file);
  }
}

previewImage(file: File) {
  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result as string;
  };
  reader.readAsDataURL(file);
}




}
