package io.takima.demo.models;

import javax.persistence.*;
import java.util.Objects;

public class MyReview {
/*
Toutes les classes marquées de "@Entity" correspondent à une table en BDD, la table "reviews" ici.

Les champs marqués de "@Column" correspondent aux colonnes de ta table.
--> remplacé par "@Id" & "@GeneratedValue(strategy = GenerationType.IDENTITY)" pour le champ id de ta classe.

/!\ Chaque classe entitée à besoin au minimum pour fonctionner de :
     - un constructeur vide
     - des getter et setter associé à ses champs
/!\    (vous pouvez les générer automatiquement via IntelliJ, Clique droit n'importe où dans ta classe --> Generate)
 */


    private Long id;

    private String date;

    private int rating;

    private String text;

    private Long kittenid;

    private String kittenname;

    private String kittenimagepath;

    public MyReview(Long id, String date, int rating, String text, Long kittenid, String kittenname, String kittenimagepath) {
        this.id = id;
        this.date = date;
        this.rating = rating;
        this.text = text;
        this.kittenid = kittenid;
        this.kittenname = kittenname;
        this.kittenimagepath = kittenimagepath;
    }

    public MyReview() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Long getKittenid() {
        return kittenid;
    }

    public void setKittenid(Long kittenid) {
        this.kittenid = kittenid;
    }

    public String getKittenname() {
        return kittenname;
    }

    public void setKittenname(String kittenname) {
        this.kittenname = kittenname;
    }

    public String getKittenimagepath() {
        return kittenimagepath;
    }

    public void setKittenimagepath(String kittenimagepath) {
        this.kittenimagepath = kittenimagepath;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MyReview myReview = (MyReview) o;
        return rating == myReview.rating && Objects.equals(id, myReview.id) && Objects.equals(date, myReview.date) && Objects.equals(text, myReview.text) && Objects.equals(kittenid, myReview.kittenid) && Objects.equals(kittenname, myReview.kittenname) && Objects.equals(kittenimagepath, myReview.kittenimagepath);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, date, rating, text, kittenid, kittenname, kittenimagepath);
    }

    @Override
    public String toString() {
        return "MyReview{" +
                "id=" + id +
                ", date='" + date + '\'' +
                ", rating=" + rating +
                ", text='" + text + '\'' +
                ", kittenid=" + kittenid +
                ", kittenname='" + kittenname + '\'' +
                ", kittenimagepath='" + kittenimagepath + '\'' +
                '}';
    }
}