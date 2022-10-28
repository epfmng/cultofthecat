package io.takima.demo.models;

import javax.persistence.*;
import java.util.Objects;

@Entity(name = "kittens")
public class Kitten {
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

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "fur")
    private String fur;

    @Column(name = "race")
    private String race;

    @Column(name = "age")
    private Integer age;

    @Column(name = "imagepath")
    private String imagepath;

    @Column(name = "sex")
    private String sex;


    public Kitten(Long id, String firstName, String fur, String race, Integer age, String imagepath, String sex) {
        this.id = id;
        this.firstName = firstName;
        this.fur = fur;
        this.race = race;
        this.age = age;
        this.imagepath = imagepath;
        this.sex = sex;
    }

    public Kitten() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getFur() {
        return fur;
    }

    public void setFur(String fur) {
        this.fur = fur;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getImagepath() {
        return imagepath;
    }

    public void setImagepath(String imagepath) {
        this.imagepath = imagepath;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Kitten kitten = (Kitten) o;
        return Objects.equals(id, kitten.id) && Objects.equals(firstName, kitten.firstName) && Objects.equals(fur, kitten.fur) && Objects.equals(race, kitten.race) && Objects.equals(age, kitten.age) && Objects.equals(imagepath, kitten.imagepath) && Objects.equals(sex, kitten.sex);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, fur, race, age, imagepath, sex);
    }

    @Override
    public String toString() {
        return "Kitten{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", fur='" + fur + '\'' +
                ", race='" + race + '\'' +
                ", age=" + age +
                ", imagepath='" + imagepath + '\'' +
                ", sex='" + sex + '\'' +
                '}';
    }
}
