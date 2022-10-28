package io.takima.demo.models;

import javax.persistence.*;
import java.util.Objects;

@Entity(name = "reviews")
public class Review {
/*
Toutes les classes marquées de "@Entity" correspondent à une table en BDD, la table "users" ici.

Les champs marqués de "@Column" correspondent aux colonnes de ta table.
--> remplacé par "@Id" & "@GeneratedValue(strategy = GenerationType.IDENTITY)" pour le champ id de ta classe.

/!\ Chaque classe entitée à besoin au minimum pour fonctionner de :
     - un constructeur vide
     - des getter et setter associé à ses champs
/!\    (vous pouvez les générer automatiquement via IntelliJ, Clique droit n'importe où dans ta classe --> Generate)
 */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private String date;

    @Column(name = "rating")
    private int rating;

    @Column(name = "text")
    private String text;

    @Column(name = "userid")
    private Long userid;

    @Column(name = "kittenid")
    private Long kittenid;

    public Review(Long id, String date, int rating, String text, Long userid, Long kittenid) {
        this.id = id;
        this.date = date;
        this.rating = rating;
        this.text = text;
        this.userid = userid;
        this.kittenid = kittenid;
    }

    public Review() {
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

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public Long getKittenid() {
        return kittenid;
    }

    public void setKittenid(Long kittenid) {
        this.kittenid = kittenid;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Review review = (Review) o;
        return rating == review.rating && Objects.equals(id, review.id) && Objects.equals(date, review.date) && Objects.equals(text, review.text) && Objects.equals(userid, review.userid) && Objects.equals(kittenid, review.kittenid);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, date, rating, text, userid, kittenid);
    }

    @Override
    public String toString() {
        return "Review{" +
                "id=" + id +
                ", date='" + date + '\'' +
                ", rating=" + rating +
                ", text='" + text + '\'' +
                ", userid=" + userid +
                ", kittenid=" + kittenid +
                '}';
    }
}
