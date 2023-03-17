# KYC Form

### Simple KYC form with HTML and CSS

#### In this page, you can see how I created a basic KYC form by step by step with html and css only. This is my beginner project, So sorry if there is any mistakes in the code. Ok now, let's see the form's requirement step by step.

## Step - 1 : Form structure

Every form has its structure.Example: Survey form has fields that want to get the information from targeted audience. Likewise, Now I want a structure for KYC form. Ok let's see the fields that wanted for the KYC form.

KYC form must have the following fields:

- Name
- ID proofs(Eg: PAN,Aadhar,other govt id)
- Contact
- Address
- Gender
- Other fields(optional)

## Step - 2 : Project setup

Before moving on to the project, we need a IDE-Integrated development environment for a project. For this KYC project, I use VS code. It is a popular development environment for HTML, CSS, Javascript and much more.

- Download and Install the VS code from the official site

  - VS code [download](https://code.visualstudio.com/download)

- After Finishing the Environment setup, Then create a folder with the name as KYC-form(any name).
  In the folder, create a new file called index.html and style.css.

  - Why index.html? -> The index. html page is the most common name used for the default page shown on a website if no other page is specified when a visitor requests the site. In other words, index. html is the name used for the homepage of the website.
  - Why style.css? -> The css file to styling the html, we can use any name for this file. I just use simply 'style.css'.

- Why simply creating two files without a folder structure?
  - Normally, If we create a frontend or any other big project, we need a folder structure to maintain and organize the project. It helps the developer in the future, when the codebase become large.
  - But, In this project we can see it is for a Simple KYC form. We don't need much code to create this form and so we don't need a folder structure.

## Step - 3 : Let's write HTML code

- After the project setup, Let's go to the index.html file
  and Type the following HTML code,

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>KYC form</title>
  </head>
  <body></body>
</html>
```

These code is standard to creating a any HTML page. And the 'title' tag in the head section is used to give a title to a webpage and shows as a tab name in the browser.

- Now,
  - inside the 'body' tag create a 'h1' tag for heading
  - and a 'form' tag for nesting all form elements and a container for all the inputs.

```
  <body>
    <h1>KYC Form</h1>
    <form>
      <div class="form-container"></div>
    </form>
  </body>
```

- Now, in the form container create all the required inputs with labels.

```
<div class="form-container">
        <!-- Name Section -->
        <label
          >Name:
          <input type="text" name="name" required />
        </label>
        <!-- PAN Section-->
        <label
          >PAN:
          <input type="number" name="pan" required />
        </label>
        <!-- Aadhaar section -->
        <label
          >Aadhaar:
          <input type="number" name="aadhar" required />
        </label>
        <!-- Contact section -->
        <label
          >Contact:
          <input type="number" name="contact" required />
        </label>
        <!-- Address section -->
        <label
          >Address:
          <textarea name="address" cols="30" rows="10" required></textarea>
        </label>
        <!-- Submit button -->
        <button type="submit">Submit</button>
      </div>
```

- Ok ,Now let's see here we created the inputs, but for gender field we need a radio buttons because the one customer has only one gender.

```
       <!-- Radio section for choosing Gender -->
       <div class="radio-buttons">
         <p class="radio-label">Gender:</p>
         <label>
           <input type="radio" name="gender" value="male" checked />Male
         </label>
         <label>
           <input type="radio" name="gender" value="female" />Female
         </label>
         <label>
           <input type="radio" name="gender" value="other" />Other
         </label>
       </div>
```

- Lets understand the code above, there you can see

  - we first have a 'div class="radio-buttons"' tag to group the radio buttons.
  - and 'p class="radio-label"' tag for labeling the radio buttons.
  - Below 'p' tag, we can see there has a 'input type="radio"' tag with a label. It was the radio buttons with labels.

- Now we want another section called Account type(optional)->for banking based KYC

```
        <!-- Account type Select section -->
        <label
          >Type of Account:
          <select>
            <option value="savings">Savings</option>
            <option value="current">Current</option>
          </select>
        </label>
```

- Above, we can see the 'label' tag with 'select' tag which has nested 'option' tags with values.It will act as select box.

### Finally look like this:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>KYC Form</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Title -->
    <h1>KYC Form</h1>
    <form>
      <!-- container for all the inputs -->
      <div class="form-container">
        <!-- Name Section -->
        <label
          >Name:
          <input type="text" name="name" required />
        </label>
        <!-- PAN Section-->
        <label
          >PAN:
          <input type="number" name="pan" required />
        </label>
        <!-- Aadhaar section -->
        <label
          >Aadhaar:
          <input type="number" name="aadhar" required />
        </label>
        <!-- Contact section -->
        <label
          >Contact:
          <input type="number" name="contact" required />
        </label>
        <!-- Address section -->
        <label
          >Address:
          <textarea name="address" cols="30" rows="10" required></textarea>
        </label>
        <!-- Radio section for choosing Gender -->
        <div class="radio-buttons">
          <p class="radio-label">Gender:</p>
          <label>
            <input type="radio" name="gender" value="male" checked />Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" />Female
          </label>
          <label>
            <input type="radio" name="gender" value="other" />Other
          </label>
        </div>
        <!-- Account type Select section -->
        <label
          >Type of Account:
          <select>
            <option value="savings">Savings</option>
            <option value="current">Current</option>
          </select>
        </label>
        <!-- Submit button -->
        <button type="submit">Submit</button>
      </div>
    </form>
  </body>
</html>
```

Here we see this code has divided as different sections for the inputs and you can see the comments above each field for know about the details.
Now we are done with the HTML side code...

## Step - 4 : Styling with CSS

After create HTML structure, Now we need styling to the HTML structure.

#### Breakdown the CSS in small parts:

- To make all elements to include the padding and border to its total width and height.

```
*{
    box-sizing: border-box;
}
```

- By targeting the whole page, to give background color and font.

```
body
{
    background: linear-gradient(to right, #434343 0%, black 100%);
    font-family: Verdana, Tahoma, sans-serif;
    height: 100%;
}
```

- By targeting the 'h1' which was heading,
  - give the text color of white.
  - align the text in center and give spacing outside the element of 50px in top,bottom,right,left with margin property.

```
h1
{
    color: rgb(255, 255, 255);
    text-align: center;
    margin: 50px;
}
```

- By targeting the form,
  - give width and height of 100%.
  - align the form in center with flex properties.

```
form{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

- By targeting the form-container which holds all the input fields,
  - give width of 40% and height of 100%.
  - give spacing outside by 10px in bottom with margin property.
  - flex utilites to make the fields form like structure(fields in one by one in a single column).
  - give the border of 1px(thickness) solid(vertex type) black(color) with a rounded edges of 5px.
  - give the background color of rgb color values which was more lighter gray.
  - And with padding, give spacing inside the element of 25px which includes to the width and height of the element.

```
.form-container
{
    width: 40%;
    height: 100%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid black;
    background-color: rgb(245, 245, 245);
    padding: 25px;
}
```

- By targeting all the input fields by 'input' tag,
  - give outside spacing of the element in top of 5px and bottom of 25px.
  - give width of 100% and height of 2.5rem (rem is a sizing unit like % or px).
  - give the border of 1px(thickness) solid(vertex type) rgb(160,160,160)(color) with a rounded edges of 3px.
  - give font size of 18px(which shows when typing).
  - And with padding, give spacing inside the element of 10px which includes to the width and height of the element.

```
input
{
    margin-top: 5px;
    margin-bottom: 25px;
    width: 100%;
    height: 2.5rem;
    border-radius: 3px;
    border: 1px solid rgb(160, 160, 160);
    font-size: 18px;
    padding: 10px;
}
```

- By targeting the labels and give slightly bigger font size than input,

```
label, .radio-label
{
    font-size: 20px;

}
```

- By targeting the input with type of radio,
  - give width of 5% and height of 1rem.
  - give spacing outside the element in top of 5px and bottom of 25px.

```
input[type="radio"]
{
    width: 5%;
    height: 1rem;
    margin-top: 5px;
    margin-bottom: 25px;
}
```

- By targeting radio label which was radio buttons value,
  - give font size of 18px which was size of other input as well.

```
.radio-buttons > label
{
    font-size: 18px;
}
```

- By targeting the text-area which was for the address section,
  - give outside spacing of the element in top of 5px and bottom of 25px.
  - give width of 100%.
  - By default it has resizable action, to make it disable we use resize: none.
  - give the border of 1px(thickness) solid(vertex type) rgb(141,140,140)(color) with a rounded edges of 3px.
  - give font size of 18px which was size of other input as well.
  - And with padding, give spacing inside the element of 10px which includes to the width and height of the element.

```
textarea
{
    margin-top: 5px;
    margin-bottom: 25px;
    width: 100%;
    resize: none;
    border-radius: 3px;
    border: 1px solid rgb(141, 140, 140);
    font-size: 18px;
    padding: 10px;
}
```

- By targeting the select box which was the account type section,
  - give width of 100% and height of 2rem.
  - give spacing outside the element in top of 10px.
  - give rounded edge with border-radius of 5px.
  - make font size of 16px.

```
select
{
    width: 100%;
    height: 2rem;
    margin-top: 10px;
    border-radius: 5px;
    font-size: 16px;
}
```

- By targeting the submit button,
  - give width of 40% and height of 2.5rem.
  - give margin as auto to bring into center.
  - give rounded edge with border-radius of 5px.
  - make the border not visible with border of none.
  - give background color of rgb(1, 35, 36)
  - give text color of aliceblue.
  - make font size of 18px.
  - give spacing outside the element in top of 25px.
  - make the cursor as pointer when it touches the button.

```
button
{
    width: 40%;
    height: 2.5rem;
    margin: auto;
    border-radius: 5px;
    border: none;
    background-color: rgb(1, 35, 36);
    color: aliceblue;
    font-size: 18px;
    margin-top: 25px;
    cursor: pointer;
}
```

- Atlast, add some media query to access on all devices
  - when screen size was within 768px, change the form-container's width to 100%(occupy the fully screen in mobile).

```
@media screen and (max-width: 768px) {
    .form-container
    {
        width: 100%;
    }
}
```

#### With this we are completing this project

## Final output:

![KYC form final output](./final-output.
