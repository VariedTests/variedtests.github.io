---
title: Harmonic Interfaces with MonettelliUIKIT in Xamarin.Forms Vol 1
description: Harmonic Interfaces with MonettelliUIKIT in Xamarin.Forms Vol 1
slug: Harmonic-Interfaces-with-MonettelliUIKIT-in-Xamarin.Forms-Vol-1
authors: danielmonettelli
tags: [English, Xamarin.Forms, MonettelliUIKIT, XAML]
image: https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/main/assets/img/images/6_1_cover_publication.jpg
hide_table_of_contents: false
---

<p style={{ fontSize: '20px', margin: '12px 0px 20px', fontWeight: 'bold', fontStyle: 'italic' }}>
When creating interfaces in Xamarin.Forms, most developers (and myself included) use
the physical device or the emulator to give the appearance of the design that is
being replicated, and what about the rest of the devices that exist around the world?.
</p>

<!-- truncate -->

From this question this publication is born, in my beginnings as a developer of Xamarin Native and Xamarin.Forms I focused on the C # language, as I was learning, I realized that the appearance of interfaces are also a fundamental complement in applications, therefore, I continue studying various UI/UX courses, and therefore, my comfort zone I extend it more and more. To date, I love creating beautiful applications, harmonizing each device (phones, tablets, desktops, etc.).

<br/>

## ¿What are Harmonic interfaces?

Harmonic Interfaces is the balance of a group of controls with the dimensions of the devices that exist today.

**Xamarin.Forms** and its powerful **Hot Reload**, allow you to visualize in real time the process of the interfaces in XAML and C #, with this great tool, I did my practices to perfect my interfaces, and to present my results in this publication.

<div class="img-container" align-items="center" >
   <img  src="https://raw.githubusercontent.com/MonettelliSoft/monettellisoft.github.io/XamarinCommunityGuide-Core/static/img/blog/harmonic_interfaces_with_monettelliuikit_in_xamarin_forms_vol_1/harmonic_interface_in_action.png"  alt="Harmonic Interface in action" />
</div>

<p style={{ textAlign: 'center', fontSize: '.8rem',
margin: '6px 0px 20px', fontWeight: 'bold' }}>
Harmonic Interface in action
</p>

<br/>

## The harmonic layout

Xamarin.Forms has different layouts, each with a purpose, of all of them, the one indicated for me is [GridLayout](https://askxammy.com/working-with-gridlayout-in-xamarin-forms/), because with **RowDefinitions** and **ColumnDefinitions** I can cleanly manage my controls, however what stands out is proportional mode, and that is where we will focus on this post.

<div class="img-container" align-items="center" >
   <img  src="https://raw.githubusercontent.com/MonettelliSoft/monettellisoft.github.io/XamarinCommunityGuide-Core/static/img/blog/harmonic_interfaces_with_monettelliuikit_in_xamarin_forms_vol_1/gridlayout_structure.png"  alt="GridLayout Structure" />
</div>

<p style={{ textAlign: 'center', fontSize: '.8rem',
margin: '6px 0px 20px', fontWeight: 'bold' }}>
GridLayout Structure
</p>

```xml
<Grid>

    <Grid.RowDefinitions>
        <RowDefinition Height=".175*" />
        <RowDefinition Height=".175*" />
        <RowDefinition Height="Auto" />
    </Grid.RowDefinitions>

    <Grid.ColumnDefinitions>
        <ColumnDefinition Width=".075*" />
        <ColumnDefinition Width=".85*" />
        <ColumnDefinition Width=".075*" />
    </Grid.ColumnDefinitions>

     <Image
        Grid.Row="0"
        Grid.RowSpan="2"
        Grid.Column="0"
        Grid.ColumnSpan="3"
        Aspect="AspectFill"
        Source="ItalianFood.png" />

     <Label
        Grid.Row="2"
        Grid.Column="0"
        Grid.ColumnSpan="2"
        Text="Hello Monettelli UIKIT"
        Style="{StaticResource TxtHeadLine4_1}" />

</Grid>
```

6.- The **"Utilities"** folder has two classes, a **ViewModelLocator** **_(useful for unit tests)_** that facilitates the replacement of the **ViewModel** in each **View**, and a **ViewNames** that names each **View**.

**_ViewModelLocator Structure:_**

```csharp
public static class ViewModelLocator
{
   public static ExerciseViewModel ExerciseViewModel { get; set; }
       = new ExerciseViewModel();

   public static ExerciseDetailViewModel ExerciseDetailViewModel { get; set; }
       = new ExerciseDetailViewModel();
}
```

**_ViewNames.cs:_**

```csharp
public class ViewNames
{
    public const string ExercisePage = "ExercisePage";

    public const string ExerciseDetailPage = "ExerciseDetailPage";
}
```

7.- In the **C# code-behind file** of the **View**, through the **BindingContext** property, we link the **ViewModelLocator**.

**_ViewModelLocator in the C# code-behind file:_**

```csharp
public partial class ExercisePage : ContentPage
{
    public ExercisePage()
    {
        InitializeComponent();

        BindingContext = ViewModelLocator.ExerciseViewModel;
    }
}
```

<br/>

## Conclusions

The use of harmonic proportions is one of many methods to stylize interfaces, make them flexible, and above all, provide a good user experience on each device.

**MonettelliUIKIT** is a great ally of the UI/UX in Xamarin.Forms and I hope it is also in the new **.NET MAUI**.

## Publication in Spanish

[Interfaces Armónicas con MonettelliUIKIT en Xamarin.Forms Vol 1](https://xamarinlatino.com/interfaces-arm%C3%B3nicas-con-monettelliuikit-en-xamarin-forms-vol-1-fb2dc05ef372)

## Resources

### Github Repository

[danielmonettelli/XF_HarmonicInterfaces](https://github.com/danielmonettelli/XF_HarmonicInterfaces)

### Sketch App Sources

[Exercise App Concept Sketch Resource](https://www.sketchappsources.com/free-source/4067-excercise-app-concept-sketch-freebie-resource.html)
